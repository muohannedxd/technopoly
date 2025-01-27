export default function Smallcard({ 
  gradient, 
  position, 
  rotation 
}: { 
  gradient: string; 
  position?: { top: string; left: string }; 
  rotation?: string; 
}) {
  return (
    <div
      className="absolute h-[25vh] w-[20vw] rounded-[30px] border-[4px] border-black"
      style={{
        background: gradient,
        top: position?.top,
        left: position?.left,
        transform: rotation ? `rotate(${rotation})` : undefined,
        zIndex: -1,
      }}
    ></div>
  );
}
