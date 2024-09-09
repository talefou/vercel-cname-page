const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20" style={{ height: '-webkit-fill-available' }}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Vercel Fast DNS
          </h1>
        </div>
        <ol className="list-inside list-decimal text-md text-center sm:text-left">
          <li>
            为您的 Vercel 项目绑定自定义域名
          </li>
          <li className="my-2">
            将 DNS 设置为 {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              cname-vc.9420.ltd
            </code>
          </li>
          <li>
            体验针对 CN 用户优化的 Vercel DNS
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
          xcsoft
        </a>
      </footer>
    </div>
  );
}


export default Home;