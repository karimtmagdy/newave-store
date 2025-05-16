const FooterSidebar = () => {
  const user = {
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/12360.png",
    username: "kraim",
    role: "admin",
    email: "dXx0o@example.com",
  };
  return (
    <footer className="mt-auto flex h-12 items-center gap-2 border-t px-2 py-1">
      <img
        src={user.img}
        alt={user.username}
        className="h-10 w-10 rounded-full object-cover object-center"
      />
      <div className="">
        <p className="text-sm font-semibold">{user.username}</p>
        <p className="text-xs text-zinc-400">{user.email}</p>
      </div>
    </footer>
  );
};

export default FooterSidebar;
