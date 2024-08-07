const AttendanceFunction = () => {
    const handleAttendance = () => {
      const message = encodeURIComponent("¡Sí, voy a ir!");
      window.open(`https://wa.me/593998743068?text=${message}`, '_blank');
    };
  
    return handleAttendance;
  };
  
  export default AttendanceFunction;