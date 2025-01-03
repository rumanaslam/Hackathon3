
export default function Hero() {
  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }} >
  <div className="flex flex-col bg-[#FFF3E3] p-8 rounded-md shadow-md md:max-w-md md:ml-auto md:mr-40 md:mt-40">
    <p className="text-sm uppercase mb-2 text-gray-700">New Arrival</p>
    <h1 className="text-4xl font-bold text-[#B88E2F]  mb-4">Discover Our New Collection</h1>
    <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button className="self-start bg-[#B88E2F]  text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300">Buy Now</button>
  </div>
</div>


    
  );
}
