export default function GoogleMap() {
  return (
    <section className="mt-20">
      
      <h2 className="text-4xl font-bold text-center mb-4 mt-10 text-gray-800">
        Dónde encontrarnos
      </h2>

      <div className="w-12 h-1 bg-primary mb-4 rounded-full mx-auto" />

      <p className="text-center text-gray-600 mb-10">
        Pasá por el local o escribinos, estamos para ayudarte
      </p>

      
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg">
   
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.789459787544!2d-65.4965003!3d-26.2360297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9418bd759e2f1273%3A0x7e52aa25a9868f4c!2sFerreter%C3%ADa%20San%20Francisco!5e0!3m2!1ses-419!2sar!4v1765429761824!5m2!1ses-419!2sar"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
