const Page = async (params) => {
  const { keyword } = params;
  const result = keyword.replace('%20', ' ')

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        
      </section>
    </>
  )
}