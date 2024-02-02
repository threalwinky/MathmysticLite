import girl from "../img/girl.webp";

const products = [
    {
      id: 1,
      name: 'Bộ dụng cụ hình học cho học sinh khiếm thị',
      href: '',
      imageSrc: '../img/p2.webp',
      imageAlt: ".",
      price: 'Hết tồn kho',
      color: '',
    },
    {
        id: 2,
        name: 'Bộ dụng cụ hình học',
        href: '',
        imageSrc: '../img/p3.webp',
        imageAlt: ".",
        price: '249000đ',
        color: '',
      },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  
                </div>
                
              </div>
              
            ))}
          </div>
          
        </div>
      </div>
    )
  }
  