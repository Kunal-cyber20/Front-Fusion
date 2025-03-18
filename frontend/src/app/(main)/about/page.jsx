import React from 'react';
import Aurora from '@/components/Aurora';  
import Particles from '@/components/Particles';
import TiltedCard from '@/components/Tiltcard';  

function AboutUs() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Menu Bar (Navbar) */}
      <nav className="fixed top-0 left-0 w-full  p-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-white text-2xl font-bold">
        <div className="text-white text-2xl font-bold">
        <div className="text-white text-2xl font-bold">
  <img 
    src="/wmremove-transformed-fotor-bg-remover-2025031814434.png" 
    alt="Logo" 
    className="h-28 w-auto object-contain" // Adjust height and add object-contain
  />
</div>
</div>

</div>
          <div className=" space-x-8 mb-15">
            <a href="http://localhost:3000/" className="text-white text-lg hover:text-blue-400">Home</a>
            <a href="/about" className="text-white text-lg hover:text-blue-400">About Us</a>
            <a href="/contact" className="text-white text-lg hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <div>
        
      {/* Aurora Background */}
      <Aurora
        colorStops={["#4400ff", "#b41d84", "#3adfc3"]}  
        blend={1.5}  
        amplitude={2.0}  
        speed={0.5}  
        className="absolute top-0 left-0 w-full h-full"  
      />
      </div>
      
      {/* About Us Section */}
      <div className="mt-5 relative z-10 max-w-4xl mx-auto p-4 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          About Us
        </h1>

        <div className="mb-5 text-center text-lg sm:text-xl">
          <p>
            Front-Fusion is a web-based platform designed to empower developers by simplifying the process of creating and managing code. The platform is based on Tailwind CSS and React JS, providing an all-in-one solution where developers can generate code and edit it directly within the platform's interface. Users can make real-time updates to their code, preview changes instantly, and customize themes and backgrounds for an optimal development experience.
          </p>
          <p className="mt-5 text-lg">
            Our platform leverages cutting-edge technologies like HTML, Tailwind CSS, React JS, and Node JS to bring you an easier and more efficient development experience.
          </p>
        </div>

        {/* Tilted Card with additional info */}
        <div className="flex justify-center mb-8">
          <TiltedCard
            imageSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0HCA0NDQ0HDQcHBw8IDQcNFREWFhURFRMYHSggGBolGxUTITEhJSk3LjouFx8zODMsNyg5LisBCgoKDQ0NDw0NDjcZFRkrNysrKysrLSs3Ky0tLSsrNy0tKysrKysrLS0rLSstLSsrKysrKy0tKysrKysrKystK//AABEIALwBDAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAACAwEABwYF/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERAv/EABkBAQEBAQEBAAAAAAAAAAAAAAIAAQMGBf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/BxmHjMfafE0cZh4xN0HFjsS0LGWHjE1PHHjLEWhYOGzGloWDVLBsTQxlh2MaUqbLDsFFKFGqWDYilCjYdZYilTGw7GNOJ1h2DUUCwLFBsacoUbDo2IoFGmNiOBYJ2Cjj7PHYeMxzed0MceMxN0MZh4zEtBlh4yxFoYw6yxN0LBsNliLQGxSwUUoWDYpYNjSCjYdjGlKnWWHYLCgUbDsFpwLBsUsGxpSp0adZYiidZSrEcTsFSwK0oFg1ShUcGidFHK+1x2HjHN5vQxmKYzE3U8ZimMxFqdjMUwcTdDGWHYzE3U7GWHYyxFKA2HYxEmyw7BRShYNilg1pwKNh2DUUoUbDrLGnExp2MqKJ2CpQsacoWCdGooFGw6NiOANh0a05QolWVFH3GMxTGY5vNanjjsZiboYzDxmJuhg4oyxFKnjLDsZiKVNlh2DYiAbFLBqKUBsOxiJMbFLBRyp2CpRrSCwTo2I4FgKUa0pQo2HRqOJ0bFLBacTo06NRQLBUqdacGidGo4+7xmKYzHJ5jU8dh4ONbo2DYozEWp4w7BsTdCxlhsqKVOwbFLBqOVOssOwaiCjYdg1FKFg2GyxHE6NhssacTrKVGtKBRsUoVhwKNOjWnAoVShWlAsGnRqOBRp0bEcTZYVY04++xmHjMcnltDGYeMxN0LBsUZYi1OssOwWlKnYyqWBYilGjYdZYilTsGw7BqOUBsOwaigUTo1HAsGnRqOBQqlCthwaFOjUcCjToVpQaNOjUcTo06NacCjSrKjidE6LTj0HHHjLHF5TQwbFLBTdCwcUsGxpShYNilg2IpU6yw7BrTlTsZTsGooFgVSjYjlTo1ShUcCjTo1HAGw6NRBRpMrXSJ0adGtKBRp0ajidGnRqOB0NOhWnAo06FRwaFUoVpx6LjsOwccHkdDGWGyxpSp0bFLBqKVOsp2DWnKFgVQbEcChYoNjTidGnRqKBRp0KnSBRp0aigUToVHAo06KOBRp0K04NCnRqOBRpUa04NCnQrTg0KdCo4NGmKOPSMZYdg2OLyEoWCoNiILBsNljSlSo2KWDUcTo06NacCwadCtOBRp0ajgUKpQqOBROhU6QKNOjUUChVAqOBRp0K2HBoU6PTXSBQqlCo4NDo6NRQKFMOmukEaVZUUemWDYdjK4PHRKxlh2DWnKnYyn0FRQLBqlTrXSDQp0a04FCqUKjgUKpQrTgUadGo4nRp0KnSDQp0ajgDSGo4FGnQrTg0KdGtOBQp0ajgUadCo4FGlRrTgVhViN6dYNOhXB4yDYFUoVHAoUxrXSBQqlDpsOAFMajgUOjo9NOBQp0emukCjSo1HAo0qNRwKNOhUcCj0dHpGFGkNa6QKNKjWnBCmFRwaNKjUcCjSo1pwKxtYjeoBTCuDxcGhTCp0gUaQ9NODQ6Oh004A0wqODQ6KjWukCj0dDppwKNKsqOJ0aVHpOkGhToVHBo9FR6RgNIa04FGlRrTghTCp0g0aQ1HAo0qNacCsbWI4/9k="
            altText="About Us"
            captionText="About Us"
            containerHeight="200px"
            containerWidth="400px"
            imageHeight="350px"
            imageWidth="350px"
            rotateAmplitude={19}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="text-center">
                <p className="font-bold mt-4 text-2xl text-black">Objectives-</p>
                <div className="space-y-3 mt-4 text-sm text-bold">
                  <p>• We aim to provide real-time Frontend UI code-generation through A.I., focusing mainly on a user-friendly interface.</p>
                  <p>• We offer customization options for generated themes, allowing developers to modify the design, structure, and functionality of the generated code easily.</p>
                  <p>• We introduce a seamless way to upload images directly into the generated-code library, streamlining the development process and saving valuable time.</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
