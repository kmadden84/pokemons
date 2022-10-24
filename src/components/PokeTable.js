import Reac, { useEffect } from 'react'


export default function PokeTable({ pokemonData = [] }) {


  return pokemonData && (
    <div>
      <table className="pokeTable">
        <tbody border="1" align="center">
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>Types</th>
          </tr>
          {
            pokemonData?.map((pokemon, index) => (
              <tr key={index}>
                <td><img src={pokemon?.image_url} /></td>
                <td>{pokemon?.name?.toString()}</td>
                <td>TYPE(S):{pokemon?.types?.map((type, index) => (
                  <span key={index} > {type.type.name}</span>
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
