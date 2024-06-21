function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>esta es una sidebar</h1>
      <main>{children}</main>
    </div>
  );
}

export default AboutLayout;
