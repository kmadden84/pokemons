export default function PokeTable({ pokemonData = [] }) {

  function formatList(pokemonTypes, type, index) {
    if (index !== pokemonTypes.length - 1 && pokemonTypes.length > 0) {
      return `${type.type.name}, `
    } else {
      return type.type.name
    }
  }

  return pokemonData && (
    <div>
      <table className="pokeTable">
        <tbody border="1" align="center">
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>TYPES</th>
          </tr>
          {
            pokemonData?.map((pokemon, index) => (
              <tr key={index}>
                <td><img src={pokemon?.image_url} /></td>
                <td>{pokemon?.name?.toString()}</td>
                <td>{pokemon?.types?.map((type, index) => (
                  <span key={index}>

                    {formatList(pokemon?.types, type, index)}

                  </span>
                ))}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
