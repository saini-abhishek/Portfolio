import { Metadata } from "next";
import TextTypingAnimation from "../about/TextTypingAnimation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "../components/Icon";
import TodoProjectImg from "../../../public/images/projects/todo-application.png";
import UserGalleryImg from "../../../public/images/projects/user-gallery.png";
import GitHubUserImg from "../../../public/images/projects/github-user.png";

export const metadata: Metadata = {
  title: "Abhishek Saini | Projects",
  description: "Abhishek Saini, iamabhisheksaini",
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  githubUrl,
}: {
  type?: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  githubUrl: string;
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubUrl} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 p-x6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  img,
  link,
  githubUrl,
}: {
  type?: string;
  title: string;
  img: StaticImageData;
  link: string;
  githubUrl: string;
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-[200px]" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubUrl} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const featuredProjects = [
    {
      title: "Find Github Profile",
      summary:
        "Create an engaging and interactive React-based web application that leverages the GitHub API to provide users with a quick and comprehensive summary of their GitHub profile. Users can simply enter their GitHub username, and the application fetches and displays key details about their profile.",
      link: "https://checkyourgithubprofile.netlify.app/",
      type: "Featured Project",
      githubUrl: "https://github.com/saini-abhishek/github_user",
      img: GitHubUserImg,
    },
  ];

  const projects = [
    {
      title: "Todo Application",
      summary:
        "Develop a dynamic React-based Todo application that empowers users to efficiently manage tasks. The application boasts a modern and responsive Material UI design, incorporates state management through Redux to track task completion, and offers an intuitive interface for adding, editing, and deleting tasks.",
      link: "https://practical-cray-bb45f7.netlify.app/",
      type: "Featured Project",
      githubUrl: "https://github.com/saini-abhishek/todo_app",
      img: TodoProjectImg,
    },
    {
      title: "User Gallery",
      summary:
        "Create an engaging React-based User Gallery that showcases the implementation of pagination and retrieves user data from a dummy data API. The application offers a visually appealing interface for users to explore a collection of user profiles, with seamless pagination for an enhanced browsing experience.",
      link: "https://eager-brown-130a8c.netlify.app/",
      type: "Featured Project",
      githubUrl: "https://github.com/saini-abhishek/react_pagination",
      img: UserGalleryImg,
    },
  ];

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <h1
        className={`inline-block w-full text-dark font-bold capitalize text-4xl text-center my-16`}
      >
        <TextTypingAnimation text="Imagination Trumps Knowledge!" />
      </h1>

      <div className="grid grid-col-12 gap-24">
        <div className="col-span-12">
          <FeaturedProject {...featuredProjects[0]} />
        </div>
        {projects.map(({ title, ...rest }) => (
          <div key={title} className="col-span-6">
            <Project title={title} {...rest} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default projects;
