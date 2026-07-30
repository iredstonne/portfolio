import { site } from "./site"
import { Project } from "../types/projects"

export const projects = [
    {
        slug: "project-01",
        cover: {
            src: "",
            alt: "Project"
        },
        title: "Projet 01",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        status: "completed",
        technologies: ["Vanilla"],
        featured: true
    },
    {
        slug: "project-02",
        cover: {
            src: "",
            alt: "Projet"
        },
        title: "Projet 02",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        status: "completed",
        technologies: ["Vanilla"],
        featured: true
    },
    {
        slug: "project-03",
        cover: {
            src: "",
            alt: "Projet"
        },
        title: "Projet 03",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        status: "completed",
        technologies: ["Vanilla"],
        featured: true
    },
    {
        slug: "project-04",
        cover: {
            src: "",
            alt: "Projet"
        },
        title: "Projet 04",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        status: "completed",
        technologies: ["Vanilla"],
        featured: true
    },
    {
        slug: "project-05",
        cover: {
            src: "",
            alt: "Projet"
        },
        title: "Projet 05",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        status: "completed",
        technologies: ["Vanilla"],
        featured: false
    }
] as Project[]

export const getProjectUrl = (project: Project) => `${site.base}/projects/${project.slug}`
