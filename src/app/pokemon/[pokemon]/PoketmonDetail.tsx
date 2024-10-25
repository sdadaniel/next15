"use client";
export default function PoketmonDetail({ name, info }: any) {
  console.log("detail");
  return (
    <>
      <h1>{name}</h1>
      <br />
      <br />
      <h2>Stat</h2>
      <ul>
        {info.stats.map((stat: any) => (
          <li key={stat.stat.name}>{stat.stat.name}</li>
        ))}
      </ul>
      <br />
      <br />

      <h2>Abilities</h2>
      <ul>
        {info.abilities.map((item: any) => {
          return <li key={item.ability.name}>{item.ability.name}</li>;
        })}
      </ul>
    </>
  );
}
