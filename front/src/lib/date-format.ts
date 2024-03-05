interface DateInterface {
  fecha: string;
  hora: string;
  mes: string
}

export const dateFormat = (inputFecha: Date): DateInterface => {
  const fechaformat = new Date(inputFecha);

  // formato dd/mm/aaaa
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // formato 14:00
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    // second: '2-digit'
  };

  const hora = fechaformat.toLocaleTimeString("es-ES", timeOptions);
  const fecha = fechaformat.toLocaleDateString("es-ES", dateOptions);
  const mes = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(fechaformat);

  return { fecha, hora, mes } as DateInterface;
};

export const combineDate = ({ fecha, hora }: DateInterface): string => {
  // destructuring de fecha y hora
  const [day, month, year] = fecha.split("/").map(Number);
  const [hours, minutes] = hora.split(":").map(Number);

  // objeto Date
  const date = new Date(year, month - 1, day, hours, minutes);

  // objeto Date a formato ISO 8601 (de mongodb)
  return date.toISOString();
};
