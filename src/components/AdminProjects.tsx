"use client";
import { useEffect, useState } from "react";
import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from "@/lib/projectService";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Card } from "@/hooks/firebaseCrud";
import Image from "next/image";

export function AdminProjects() {
  const [projects, setProjects] = useState<Card[]>([]);
  const router = useRouter();
  const [form, setForm] = useState<Card>({
    title: "",
    description: "",
    descriptionPrev: "",
    src: "",
    linkText: "",
    link: "",
    id: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/#project");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { id, ...data } = form;
    if (editingId) {
      await updateProject(editingId, data);
      setEditingId(null);
    } else {
      await addProject(data);
    }
    setForm({
      title: "",
      description: "",
      descriptionPrev: "",
      src: "",
      linkText: "",
      link: "",
      id: "",
    });
    const updated = await getProjects();
    setProjects(updated);
  };

  const handleEdit = (project: Card) => {
    setForm(project);
    setEditingId(project.id);
  };

  const handleDelete = async (id: string) => {
    await deleteProject(id);
    const updated = await getProjects();
    setProjects(updated);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-black to-slate-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-24 py-10">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
            <h2 className="text-xl font-bold text-center md:text-left">
              Manage Projects
            </h2>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full w-full md:w-fit"
            >
              Logout
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Title", key: "title" },
              { label: "Image URL", key: "src" },
              { label: "Description Preview", key: "descriptionPrev" },
              { label: "Description", key: "description" },
              { label: "Link", key: "link" },
            ].map(({ label, key }) => (
              <input
                key={key}
                type="text"
                placeholder={label}
                value={form[key as keyof Card] as string}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full p-2 border rounded-full"
                required
              />
            ))}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, linkText: "Visit" })}
                className={`flex-1 p-2 rounded-full border ${
                  form.linkText === "Visit"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                Visit
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, linkText: "Unavailable" })}
                className={`flex-1 p-2 rounded-full border ${
                  form.linkText === "Unavailable"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                Unavailable
              </button>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-full"
            >
              {editingId ? "Update" : "Add"} Project
            </button>
          </form>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-8 text-white text-center">
        Project List
      </h1>

      <div className="max-w-screen px-4 sm:px-8 lg:px-24">
        <ul className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-4 border rounded-xl bg-neutral-50 space-y-4 flex flex-col gap-4"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gray-200 overflow-hidden rounded-lg">
                {project.src && (
                  <Image
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-2">
                <p>
                  <strong>Title:</strong> {project.title}
                </p>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                <p>
                  <strong>Description Preview:</strong>{" "}
                  {project.descriptionPrev}
                </p>
                <p>
                  <strong>Link:</strong> {project.link}
                </p>
                <p>
                  <strong>Link Text:</strong>{" "}
                  <span
                    className={`font-medium ${
                      project.linkText === "Visit"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {project.linkText}
                  </span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-yellow-500 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-red-500 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
