export async function getStaticPaths() {
   return {
      paths: [{
         params: {
            id: '1'
         }
      },{
         params: {
            id: '2'
         }
      },{
         params: {
            id: '3'
         }
      }],
      fallback: 'blocking' // além desse parâmetro, aceita true ou false
   }
}

export async function getStaticProps(context) {
   const id = context.params.id;

   return {
      props: {
         id: id
      }
   }
}

function Produtos(props) {
   return <div>Id do produto: {props.id}</div>
}

export default Produtos;
