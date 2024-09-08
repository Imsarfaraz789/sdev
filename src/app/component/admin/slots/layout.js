export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Section",
};

export default function AdminLayout({
  children,
  addblog,
  addnews,
  updateblog,
  updatenews,
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="w-full justify-center items-center ">
            <div className="flex justify-center max-md:flex-col">
              <div className="p-6">{children}</div>
            </div>
            <div className="flex justify-center max-md:flex-col py-4 px-6">
              <div className="p-6">{addblog}</div>
              <div className="px-6">{addnews}</div>
              <div className="px-6">{updateblog}</div>
              <div className="px-6">{updatenews}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
