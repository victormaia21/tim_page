import { RequireDataI } from "@/app/interface/components/EstadoClienteInterface";
import { MenuItem, Select, FormControl, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

export default function EstadoCliente() {
  const [estado, setEstado] = useState('');
  const [ddd, setDdd] = useState<string>('');
  const [required, setRequired] = useState<RequireDataI>({ dddRequire: false, estadoRequire: false });
  const estadosComDDD = [
    {
      nome: "Acre",
      sigla: "AC",
      ddds: [68],
    },
    {
      nome: "Alagoas",
      sigla: "AL",
      ddds: [82],
    },
    {
      nome: "Amapá",
      sigla: "AP",
      ddds: [96],
    },
    {
      nome: "Amazonas",
      sigla: "AM",
      ddds: [92, 97],
    },
    {
      nome: "Bahia",
      sigla: "BA",
      ddds: [71, 73, 74, 75, 77],
    },
    {
      nome: "Ceará",
      sigla: "CE",
      ddds: [85, 88],
    },
    {
      nome: "Distrito Federal",
      sigla: "DF",
      ddds: [61],
    },
    {
      nome: "Espírito Santo",
      sigla: "ES",
      ddds: [27, 28],
    },
    {
      nome: "Goiás",
      sigla: "GO",
      ddds: [62, 64],
    },
    {
      nome: "Maranhão",
      sigla: "MA",
      ddds: [98, 99],
    },
    {
      nome: "Mato Grosso",
      sigla: "MT",
      ddds: [65, 66],
    },
    {
      nome: "Mato Grosso do Sul",
      sigla: "MS",
      ddds: [67],
    },
    {
      nome: "Minas Gerais",
      sigla: "MG",
      ddds: [31, 32, 33, 34, 35, 37, 38],
    },
    {
      nome: "Pará",
      sigla: "PA",
      ddds: [91, 93, 94],
    },
    {
      nome: "Paraíba",
      sigla: "PB",
      ddds: [83],
    },
    {
      nome: "Paraná",
      sigla: "PR",
      ddds: [41, 42, 43, 44, 45, 46],
    },
    {
      nome: "Pernambuco",
      sigla: "PE",
      ddds: [81, 87],
    },
    {
      nome: "Piauí",
      sigla: "PI",
      ddds: [86, 89],
    },
    {
      nome: "Rio de Janeiro",
      sigla: "RJ",
      ddds: [21, 22, 24],
    },
    {
      nome: "Rio Grande do Norte",
      sigla: "RN",
      ddds: [84],
    },
    {
      nome: "Rio Grande do Sul",
      sigla: "RS",
      ddds: [51, 53, 54, 55],
    },
    {
      nome: "Rondônia",
      sigla: "RO",
      ddds: [69],
    },
    {
      nome: "Roraima",
      sigla: "RR",
      ddds: [95],
    },
    {
      nome: "Santa Catarina",
      sigla: "SC",
      ddds: [47, 48, 49],
    },
    {
      nome: "São Paulo",
      sigla: "SP",
      ddds: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
    {
      nome: "Sergipe",
      sigla: "SE",
      ddds: [79],
    },
    {
      nome: "Tocantins",
      sigla: "TO",
      ddds: [63],
    },
  ];

  useEffect(() => {
    if (estado) {
        setRequired((prev) => ({ ...prev, estadoRequire: false }));
    } 
  }, [estado]);

  useEffect(() => {
    if (ddd) {
        setRequired((prev) => ({ ...prev, dddRequire: false }));
    }
  }, [ddd])
  

  const handleEstadoChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setEstado(value);
  };

  const handleCloseEstado = () => {
    if (estado) {
        setRequired((prev) => ({ ...prev, estadoRequire: false }));
    } else {
        setRequired((prev) => ({ ...prev, estadoRequire: true }));
    }
  };

  const handleDddChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setDdd(value);
  }
  
  const handleCloseDDD = () => {
    if (ddd) {
        setRequired((prev) => ({ ...prev, dddRequire: false }));
    } else {
        setRequired((prev) => ({ ...prev, dddRequire: true }));
    }
  }
  
  return (
    <div className={`block bg-white w-[300px] lg:w-2/6 fixed top-1/2 left-1/2 -translate-1/2 z-40 p-12`}>
        <div>
            <h2
              className="font-extrabold text-3xl space tracking-wide"
              style={{ fontFamily: 'sans-serif' }}
            >
                Selecione o seu estado
            </h2>
            <p className="mt-2">Traremos as melhores ofertas para você!</p>
            <FormControl fullWidth variant="standard">
                <Select
                    value={estado}
                    onChange={handleEstadoChange}
                    onClose={handleCloseEstado}
                    disableUnderline // remove underline automática do MUI
                    sx={{
                    borderBottom: `2px solid ${required.estadoRequire ? 'red' : '#ccc'}`,
                    borderRadius: 0,
                    backgroundColor: 'white',
                    marginTop: '.5em',
                    fontSize: '1.15em',

                    '&:hover': {
                        borderBottom: `2px solid ${required.estadoRequire ? 'red' : '#999'}`,
                    },
                    '&.Mui-focused': {
                        borderBottom: `2px solid ${required.estadoRequire ? 'red' : '#ccc'}`,
                    },
                    }}
                    MenuProps={{
                    PaperProps: {
                        style: {
                        maxHeight: 6 * 40, // 6 items visíveis
                        },
                    },
                    }}
                >
                    {estadosComDDD.map((estado) => (
                    <MenuItem key={estado.sigla} value={estado.nome} className="text-2xl">
                        {estado.nome}
                    </MenuItem>
                    ))}
                </Select>
                {required.estadoRequire && <p className="text-[red]">Obrigatorio</p>}
            </FormControl>
            {estado && (
                <FormControl fullWidth variant="standard" sx={{ marginTop: '2.5em' }}>
                <h1 className="font-bold text-3xl">DDD de Serviço</h1>
                <Select
                    value={ddd}
                    onChange={handleDddChange}
                    onClose={handleCloseDDD}
                    disableUnderline // remove underline automática do MUI
                    sx={{
                    borderBottom: `2px solid ${required.dddRequire ? 'red' : '#ccc'}`,
                    borderRadius: 0,
                    backgroundColor: 'white',
                    fontSize: '1.15em',

                    '&:hover': {
                        borderBottom: `2px solid ${required.dddRequire ? 'red' : '#999'}`,
                    },
                    '&.Mui-focused': {
                        borderBottom: `2px solid ${required.dddRequire ? 'red' : '#ccc'}`,
                    },
                    }}
                    MenuProps={{
                    PaperProps: {
                        style: {
                        maxHeight: 6 * 40, // 6 items visíveis
                        },
                    },
                    }}
                >
                    {estadosComDDD.filter((e) => e.nome === estado).map((est) => (
                        est.ddds.map((ddd) => (
                            <MenuItem key={ddd} value={ddd} className="text-2xl">{ddd}</MenuItem>
                        ))
                    ))}
                </Select>
                {required.dddRequire && <p className="text-[red]">Obrigatorio</p>}
            </FormControl>
            )}
        </div>
        <div>
            <button>Confirmar</button>
        </div>
    </div>
  )
}