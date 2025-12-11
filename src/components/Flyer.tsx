import { ReactNode } from 'react';

interface FlyerProps {
  title: string;
  subtitle: string;
  gradient: string;
  image?: string;
  children: ReactNode;
}

export function Flyer({ title, subtitle, gradient, image, children }: FlyerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] group hover:shadow-2xl transition-shadow">
      {/* Background Image or Gradient */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-85 group-hover:opacity-90 transition-opacity`} />
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        <div>
          <h3 className="text-white text-2xl mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
