const RadialGradient = () => {
  return (
    <svg
      viewBox="0 0 1208 1024"
      className="absolute opacity-70 -top-10 left-1/2 -z-8 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
    >
      <ellipse
        cx={604}
        cy={512}
        fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
        rx={604}
        ry={512}
      />
      <defs>
        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
          <stop stopColor="#E5FF99" />
          <stop offset={1} stopColor="hsl(var(--primary))" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RadialGradient;
