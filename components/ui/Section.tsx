import Container from "./Container";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-40 mb-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}