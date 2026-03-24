import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-8 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Edwin's Portfolio
          </h1>
          <p className="max-w-md text-lg leading-10 text-zinc-600 dark:text-zinc-400">
            
            I am an aspiring software engineer with a passion for building things that I can use on a daily basis. <br></br> 
            I have a strong background in full stack web development, simulator development, and tool development. I am always looking for new challenges to tackle. <br></br>
            I am currently working on my portfolio, which is a collection of my work and projects that I have been involved in.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          Description of projects and work experience, with links to github repos and live demos. <br></br>
          {/*  */}

        </div>
      </main>
    </div>
  );
}
