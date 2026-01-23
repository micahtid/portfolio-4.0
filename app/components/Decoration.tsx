export default function Decoration() {
    return (
        <div
            className="w-full h-[12.5px]"
            style={{
                backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(0,0,0,0.075) 0, rgba(0,0,0,0.075) 8px, transparent 8px, transparent 16px)",
            }}
        />
    );
}
