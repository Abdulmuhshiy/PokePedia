import React from "react";

const About = () => {
  return (
    <div className="mx-5 md:container md:mx-auto py-8 grid grid-cols-1 md:grid-cols-2 h-screen place-content-center">
      <div className="w-full md:w-2/4 mx-auto">
        <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG156.png" alt="Squirtle" className="w-full rounded-lg" />
      </div>
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold">About Poke Pedia</h1>
          <img src="https://i.pinimg.com/originals/50/e7/01/50e7012b5be57e77bea18ad1e779e762.gif" alt="pikachu" className="w-24" />
        </div>
        <p className="mb-4">Poke Pedia adalah sumber informasi utama untuk semua hal terkait Pokémon. Kami menyediakan data lengkap tentang berbagai Pokémon, termasuk detail tentang jenis, kemampuan, dan sejarah mereka.</p>
        <p className="mb-4">Tim kami berkomitmen untuk memberikan informasi yang akurat dan terbaru kepada para penggemar Pokémon di seluruh dunia.</p>
      </div>
    </div>
  );
};

export default About;
