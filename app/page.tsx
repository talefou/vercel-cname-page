import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-md text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Bind a custom domain to your Vercel project.
          </li>
          <li className="my-2">
            Set up a fast DNS server for cn users. {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              cname-vc.9420.ltd
            </code>
          </li>
          <li>
            Wait for the DNS to take effect.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.xsot.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Deployed by xcsoft
        </a>
      </footer>
    </div>
  );
}
