import { getRoutePath } from "./routes"
import { Experience } from "../types/experiences"

export const experiences = [
    {
        slug: "experience-01",
        cover: {
            src: "",
            alt: "Experience"
        },
        title: "Experience 01",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        featured: true
    },
    {
        slug: "experience-02",
        cover: {
            src: "",
            alt: "Experience"
        },
        title: "Experience 02",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        featured: true
    },
    {
        slug: "experience-03",
        cover: {
            src: "",
            alt: "Experience"
        },
        title: "Experience 03",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        featured: true
    },
    {
        slug: "experience-04",
        cover: {
            src: "",
            alt: "Experience"
        },
        title: "Experience 04",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        featured: true
    },
    {
        slug: "experience-05",
        cover: {
            src: "",
            alt: "Experience"
        },
        title: "Experience 05",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur optio quaerat delectus? Perspiciatis laboriosam possimus corporis deleniti repellat earum velit repellendus porro aperiam, autem maxime, architecto reprehenderit atque cupiditate!",
        startedAt: "",
        endedAt: "",
        featured: false
    }
] as Experience[]

export const getExperienceUrl = (experience: Experience) =>
    `${getRoutePath("experiences")}/${experience.slug}`
