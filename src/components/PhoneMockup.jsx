export default function PhoneMockup({ children, className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-body">
        <div className="phone-notch" />
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}

