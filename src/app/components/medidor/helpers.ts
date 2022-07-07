import { MedidorMD30 } from "./medidor.model";

/* Receives an IPv4 and format it to a pattern accepted by the operational system
  e.g.,'   000.230.090.001 ' input returns '0.230.90.1'
*/
export function formatIP(ip: string): string {
  ip = ip.trim();
  const pieces = ip.split('.');
  let formated_ip = '';
  for(const piece of pieces) {
      if(piece.length === 1)
          formated_ip = formated_ip.concat(piece[0])
      else if(piece.length === 2)
          if(piece[0] !== '0')
              formated_ip = formated_ip.concat(piece[0], piece[1])
          else
              formated_ip = formated_ip.concat(piece[1])
      else
          if(piece[0] !== '0')
              formated_ip = formated_ip.concat(piece[0], piece[1], piece[2])
          else if(piece[1] !== '0')
              formated_ip = formated_ip.concat(piece[1], piece[2])
          else
              formated_ip = formated_ip.concat(piece[2])
      
      formated_ip = formated_ip.concat('.')        
  }
  return formated_ip.slice(0, formated_ip.length-1)
}