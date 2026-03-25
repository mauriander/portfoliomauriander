import { projectsFallback } from "../data/projects";

const FIRESTORE_CONFIG = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  databaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || "(default)",
  collection: import.meta.env.VITE_FIRESTORE_PROJECTS_COLLECTION || "portfolio_projects",
};

const DEFAULT_PROJECT_IMAGE = "/projects/prode-online.svg";

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function fromFirestoreValue(value) {
  if (!isPlainObject(value)) {
    return value;
  }

  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("arrayValue" in value) {
    return (value.arrayValue.values || []).map(fromFirestoreValue);
  }
  if ("mapValue" in value) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields || {}).map(([key, fieldValue]) => [
        key,
        fromFirestoreValue(fieldValue),
      ])
    );
  }

  return value;
}

function normalizeProject(project = {}) {
  return {
    title: project.title || "Proyecto sin titulo",
    description: project.description || "Descripcion pendiente.",
    stack: Array.isArray(project.stack) ? project.stack : [],
    link: project.link || "#",
    image: project.image || DEFAULT_PROJECT_IMAGE,
    imageAlt: project.imageAlt || `Vista previa de ${project.title || "proyecto"}.`,
    order: Number.isFinite(project.order) ? project.order : 999,
    featured: project.featured !== false,
    status: project.status || "published",
  };
}

function mapFirestoreDocument(document) {
  const fields = Object.fromEntries(
    Object.entries(document.fields || {}).map(([key, value]) => [
      key,
      fromFirestoreValue(value),
    ])
  );

  return normalizeProject({
    id: document.name?.split("/").pop(),
    ...fields,
  });
}

export function isFirestoreProjectsConfigured() {
  return Boolean(FIRESTORE_CONFIG.projectId);
}

export function getStaticProjects() {
  return [...projectsFallback].sort((a, b) => a.order - b.order);
}

export async function fetchProjects({ signal } = {}) {
  if (!isFirestoreProjectsConfigured()) {
    return {
      projects: getStaticProjects(),
      source: "static",
    };
  }

  const url = new URL(
    `https://firestore.googleapis.com/v1/projects/${FIRESTORE_CONFIG.projectId}/databases/${FIRESTORE_CONFIG.databaseId}/documents/${FIRESTORE_CONFIG.collection}`
  );

  if (FIRESTORE_CONFIG.apiKey) {
    url.searchParams.set("key", FIRESTORE_CONFIG.apiKey);
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Firestore request failed with status ${response.status}.`);
  }

  const payload = await response.json();
  const documents = Array.isArray(payload.documents) ? payload.documents : [];
  const projects = documents
    .map(mapFirestoreDocument)
    .filter((project) => project.status === "published" && project.featured !== false)
    .sort((a, b) => a.order - b.order);

  return {
    projects: projects.length > 0 ? projects : getStaticProjects(),
    source: projects.length > 0 ? "firestore" : "static",
  };
}
