export default function SSR({ generatedAt }) {
    return generatedAt;
  }
  
  export async function getServerSideProps() {
    const generatedAt = new Date().toISOString();
    // Pass data to the page via props
    return { props: { generatedAt } };
  }
  