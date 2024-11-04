export default function Head() {
  return (
    <>
      <title> КОП | Комплексная оценка персонала</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Узнайте как видят ваш бизнес клиенты!" />
      <script type="application/ld+json">
        {
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "КОП",
            "url": "https://kop-project.ru/",
            "description": "Комплексная оценка персонала",
            "logo": "https://kop-project.ru/images/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7 (903) 641-99-72",
              "email": "request@kop-project.ru"
            }
          })
        }
      </script>
      
      <link rel="icon" href="/images/favicon.ico"/>
    </>
  );
}
