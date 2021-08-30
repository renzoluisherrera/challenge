function desafio03( miString  )
{
  return miString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 
}