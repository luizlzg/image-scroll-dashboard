/* eslint-disable @typescript-eslint/no-explicit-any */

// Time line chart data
export const timeData = [
  { time: '00:00', value: 20 },
  { time: '03:00', value: 40 },
  { time: '06:00', value: 30 },
  { time: '09:00', value: 45 },
  { time: '12:00', value: 80 },
  { time: '15:00', value: 100 },
  { time: '18:00', value: 65 },
  { time: '21:00', value: 80 },
];

// Volume bar chart data
export const volumeData = [
  { name: '00:00', value: 80 },
  { name: '02:00', value: 90 },
  { name: '04:00', value: 85 },
  { name: '06:00', value: 200 },
  { name: '08:00', value: 160 },
  { name: '10:00', value: 210 },
  { name: '12:00', value: 180 },
  { name: '14:00', value: 190 },
  { name: '16:00', value: 170 },
  { name: '18:00', value: 220 },
  { name: '20:00', value: 150 },
  { name: '22:00', value: 130 },
];

// Results pie chart data
export const resultsData = [
  { name: 'Resolvidas pela IA', value: 68, percentage: '68%', color: '#6C5CE7' },
  { name: 'Transferidas para atendente humano', value: 20, percentage: '20%', color: '#33C3F0' },
  { name: 'Abandono', value: 8, percentage: '8%', color: '#50E3C2' },
  { name: 'Falha técnica', value: 4, percentage: '4%', color: '#FF6B6B' },
];

// Topics bar chart data
export const topicsData = [
  { name: 'Agendamentos', value: 35 },
  { name: 'Guias', value: 30 },
  { name: 'Boletos', value: 22 },
  { name: 'Buscar redes', value: 18 },
  { name: 'Carteirinha', value: 15 },
];

// Transfer reasons pie chart data
export const transferReasonsData = [
  { name: 'CPF não encontrado', value: 52, percentage: '52.1%', color: '#6C5CE7' },
  { name: 'Plano Dental', value: 23, percentage: '22.8%', color: '#50E3C2' },
  { name: 'Demanda não identificada', value: 14, percentage: '13.9%', color: '#33C3F0' },
  { name: 'E-mail não encontrado', value: 11, percentage: '11.2%', color: '#FFD166' },
];

// Transfer motivation bar chart data
export const transferMotivationData = [
  { name: 'Agendamentos', value: 35 },
  { name: 'Guias', value: 30 },
  { name: 'Boletos', value: 22 },
  { name: 'Buscar redes', value: 18 },
  { name: 'Carteirinha', value: 12 },
];

// Skill transfer list data
export const skillTransferData = [
  { id: '1400', name: 'Agendamento', percentage: '5%', value: '5%' },
  { id: '1404', name: 'Guia', percentage: '1%', value: '1%' },
  { id: '1402', name: 'Boletos', percentage: '1%', value: '1%' },
  { id: '1401', name: 'Buscar redes', percentage: '1%', value: '1%' },
  { id: '1400', name: 'Carteirinha', percentage: '0%', value: '0%' },
];

// Call interruption data
export const callInterruptionData = [
  { name: 'Identificação do CPF', value: 52, percentage: '52.1%', color: '#6C5CE7' },
  { name: 'Selecionar plano', value: 23, percentage: '22.8%', color: '#50E3C2' },
  { name: 'Pergunta aberta', value: 14, percentage: '13.9%', color: '#33C3F0' },
  { name: 'Transferência ao atendente', value: 11, percentage: '11.2%', color: '#FFD166' },
  { name: 'Outros', value: 11, percentage: '11.2%', color: '#FF6B6B' },
];


/*
Exemplo de objeto
TODO: apagar depois
[
  {
    "id": "a7fa62cd-a9d4-4835-be5c-9cd3cd128deb",
    "created_at": "2025-03-18T10:20:54.678329-03:00",
    "date": "18/03/2025",
    "time": "10:20:54",
    "caller": "tel:+5562982076832",
    "phone": "+552122210002",
    "call_duration": 19.42,
    "ai_solved": true,
    "ramal": null,
    "final_step": "{\"timestamp\": \"2025-03-18T13:21:11.021000+00:00\", \"type\": \"TaskStateExited\", \"id\": 25, \"previousEventId\": 24, \"stateExitedEventDetails\": {\"name\": \"Ask for CPF\", \"output\": \"{\\\"id\\\":\\\"a7fa62cd-a9d4-4835-be5c-9cd3cd128deb\\\",\\\"flag\\\":\\\"END_VOICE\\\",\\\"details\\\":{\\\"id_task\\\":\\\"AQCAAAAAKgAAAAMAAAAAAAAAApWklhLM1TGf4CjJXju2BiezD0xP9hWfBv3Mh/3PSuS/P74pqLTpCXJx05r4kjAQJFHdE53YdpKsEZUmf9LzraoTIvF5JG0wWNcnf5T5f+Q=T61g/FCVaHirOOuMvSsMQNUa6Djc1dLC3nRvBkyJzGJ7aNIdf5F2pN+chHQM8F9I+0eFTNbWuOE1ovU6lBgdRxJOksHISIwpkVrCYiL2VZcW+xWfsrrWXhwI5i9xi2robB3mgQw4By+hBDlQvr0ZPuN7UKWpPrtktAtceOEm3SXb8o5+eXr6WpoxPiy/4jwGsaoMY8iN5ewmhbxsO1Oxv+9uyATe+PBKHSMEivQIMQwtXfpgUhHl/VCWzrKt5yOsVcWQxEARRRYK9ZADiq5XXFPGSWv61T3bMjBrvpr/YoTHrp720PhVG570UeNOE0rIhvLfu5lHXplsSjsq69eD3Nvt3IotrF7TnohoQOJ4CG6RHAAd9zpCdqBnAv4bZwshDysRSHLCt7cpIliEaPXgVTQkLWadVCuzOn7/7HPiZvkNEnBEOi38GOXdYeabjKjSHHgagbkd9qpFIIllGGhIEhsu9TO+MaTCdjsGG8ptB76DNxgp1HV3bL9tyYgczLocjlhvZYaDPYLQu+Q730pW\\\"},\\\"GetPhoneStatus\\\":{\\\"Headers\\\":{\\\"date\\\":[\\\"Tue, 18 Mar 2025 13:21:05 GMT\\\"],\\\"content-length\\\":[\\\"285\\\"],\\\"server\\\":[\\\"uvicorn\\\"],\\\"content-type\\\":[\\\"application/json\\\"]},\\\"ResponseBody\\\":{\\\"flag\\\":\\\"ASK_CPF\\\",\\\"details\\\":{\\\"response\\\":\\\"Ainda n\\u00e3o consegui encontrar seus dados, por favor, digite seu CPF!\\\",\\\"metadata\\\":null,\\\"fail_reason\\\":null,\\\"cumulative_metadata\\\":{\\\"response_time\\\":0,\\\"input_tokens\\\":0,\\\"output_tokens\\\":0,\\\"total_tokens\\\":0}},\\\"id\\\":\\\"a7fa62cd-a9d4-4835-be5c-9cd3cd128deb\\\"},\\\"StatusCode\\\":200,\\\"StatusText\\\":\\\"OK\\\"},\\\"SayCPFReceived\\\":{\\\"id\\\":\\\"a7fa62cd-a9d4-4835-be5c-9cd3cd128deb\\\",\\\"flag\\\":\\\"END_VOICE\\\",\\\"details\\\":{\\\"id_task\\\":\\\"AQCAAAAAKgAAAAMAAAAAAAAAAje9K7VFtcJGKrOSdAcGlzrAsXR+ch+U4X6gzv8EiJ5Kh4ErSwD2v/gB2OG62kF4T6z45mcrDbV7WUltArpVkGSYaBFG76LGhJM1epzVpis=s64GfMOcNjIZZAgNDd8d100ND8+yCfY6a6b9PCKNCHfleVT9fvoDfgE5VFGt5+Lsxgm2qZvgaTCdE2MN6Ugy/9qwdKQg807N7WkBx9/bPcLvjeG9PUDxG/0mYTQho0HLXXXPTM+ClrQ+46x4dFX0soIWRQ9+StsD/CIbrs+ArdtcpJPf1793X3et9Fl3bb8YnQuE14KFR92h7Enk+YBHC+6G3UqyTO59Owhzh0KGjO3fMhEgjz+V46SmNbGrc26qbqNmdrh6aUhjnT+mtnMzki753MnVsmdfY4AdKkjGJkjrawqCdJZnYLzZGcOb2SCKA8UNqq5NzCCSKM7fpvBw8oykyqxB93+FOMJ4v7dQoeBHJfdalQej+hplMfhwvaoejyHRCEg6LzBmfMezFsk3rCDdHfhYkbCPG1fe29KrgVJt6TFaceSClFWbsnMnTw4vdqQ/G75I4X7FjWuBFcHn1e8JgRRuNTcKG3AHGE3lKpAsCpAl1eOqnTrfAy0L0LkJ65FoxowyEF1ESQp0wu7c\\\"}}}\", \"outputDetails\": {\"truncated\": false}}}",
    "fail_reason": null,
    "technical_failure": null,
    "disconnected_by_user": true,
    "data": {
        "cpf": null,
        "dataQueue": null,
        "dataFinder": null,
        "dataHelper": null,
        "dataClassic": null,
        "dataRetriever": [],
        "dataSummarizer": null,
        "dataTranscriber": null
    }
    ...
]

*/

import axios from "axios";

export interface ProcessedData {
  totalCalls: number;
  resolvedByIA: number;
  transferredCalls: number;
  abandonedCalls: number;
  failedCalls: number;
  totalHandlingTime: number;
  totalHandlingTimeAI: number;
  percentageResolvedByIA: string;
  percentageTransferred: string;
  percentageAbandoned: string;
  percentageFailed: string;
  volumeByHour: Array<{ name: string; value: number; color?: string }>;
  resultsByType: Array<{ name: string; value: number; percentage: string; color: string }>;
  transferReasonsByCategory: Array<{ name: string; value: number; percentage: string; color: string }>;
  callsBySubject: Array<{ name: string; value: number; percentage: string; color: string }>;
  timeData: Array<{ name: string; value: number; time: string }>; // Nova propriedade para LineChart
}

// formatando os dados
const formatCallData = (item) => {
  let finalStepParsed = {};
  try {
    finalStepParsed = JSON.parse(item.final_step).outputDetails;
  } catch (error) {
    console.error("Erro ao parsear final_step:", error, item.final_step);
    // Retornar um objeto vazio em caso de erro
    finalStepParsed = {};
  }

  return {
    id: item.id,
    created_at: item.created_at,
    date: item.date,
    time: item.time,
    caller: item.caller.replace("sip:", "").replace("@localhost", ""),
    phone: item.phone,
    call_duration: item.call_duration,
    ai_solved: item.ai_solved,
    ramal: item.ramal,
    final_step: finalStepParsed,
    fail_reason: item.fail_reason,
    technical_failure: item.technical_failure,
    disconnected_by_user: item.disconnected_by_user,
    data: item.data,
  };
};

// calculando tma da chamada
export const calculateAverageHandlingTime = (calls) => {
  if (calls.length === 0) return 0;

  const totalHandlingTime = calls.reduce((acc, call) => acc + call.call_duration, 0);

  return totalHandlingTime / calls.length;
};

// TMA da IA
export const calculateAverageHandlingTimeAI = (calls) => {
  const aiCalls = calls.filter((call) => call.ai_solved);
  if (aiCalls.length === 0) return 0;

  const totalHandlingTimeAI = aiCalls.reduce((acc, call) => acc + call.call_duration, 0);

  return totalHandlingTimeAI / aiCalls.length;
};

export const processCallData = (calls) => {
  const totalCalls = calls.length;
  const resolvedByIA = calls.filter((call) => call.ai_solved).length;
  const transferredCalls = calls.filter((call) => call.ramal !== null).length;
  const abandonedCalls = calls.filter((call) => call.disconnected_by_user).length; //TODO: verificar se é a forma correta de calcular as chamadas abandonadas
  const failedCalls = calls.filter((call) => call.technical_failure !== null).length;
  const totalHandlingTime = calculateAverageHandlingTime(calls);
  const totalHandlingTimeAI = calculateAverageHandlingTimeAI(calls);

  const volumeByHour = {};
  const resultsByType = {};
  const transferReasonsByCategory = {};
  const callsBySubject = {};
  const timeByHour = {};

  interface CallData {
    id: string;
    created_at: string;
    date: string;
    time: string;
    caller: string;
    phone: string;
    call_duration: number;
    ai_solved: boolean;
    ramal: string | null;
    final_step: any;
    fail_reason: string | null;
    technical_failure: string | null;
    disconnected_by_user: boolean;
    data: {
      cpf: string | null;
      dataQueue: string | null;
      dataFinder: string | null;
      dataHelper: string | null;
      dataClassic: {
        categoria: string | null;
        tipo: string | null;
      } | null;
      dataRetriever: any[];
      dataSummarizer: string | null;
      dataTranscriber: string[] | null;
    };
  }

  calls.forEach((call: CallData) => {
    if (!call) return; // Ignora itens nulos

    const hour = call.time.split(':')[0];
    if (volumeByHour[hour]) {
      volumeByHour[hour]++;
    } else {
      volumeByHour[hour] = 1;
    }

    // Calcular resultados das chamadas
    const resultType = call.ai_solved ? 'Resolvidas pela IA' :
                       call.ramal !== null ? 'Transferidas para atendente humano' :
                       call.disconnected_by_user ? 'Abandono' :
                       call.technical_failure !== null ? 'Falha técnica' : 'Outro';
    if (resultsByType[resultType]) {
      resultsByType[resultType]++;
    } else {
      resultsByType[resultType] = 1;
    }

    if (call.ramal !== null) {
      const transferCategory = call.data?.dataClassic?.categoria || 'Outro';
      if (transferReasonsByCategory[transferCategory]) {
        transferReasonsByCategory[transferCategory]++;
      } else {
        transferReasonsByCategory[transferCategory] = 1;
      }
    }

    const subjectType = call.data?.dataClassic?.tipo || 'Outro';
    if (callsBySubject[subjectType]) {
      callsBySubject[subjectType]++;
    } else {
      callsBySubject[subjectType] = 1;
    }

    // Calcular TMA por hora para chamadas resolvidas pela IA
    if (call.ai_solved) {
      if (timeByHour[hour]) {
        timeByHour[hour].totalHandlingTime += call.call_duration;
        timeByHour[hour].count++;
      } else {
        timeByHour[hour] = {
          totalHandlingTime: call.call_duration,
          count: 1,
        };
      }
    }
  });

  const percentageResolvedByIA = ((resolvedByIA / totalCalls) * 100).toFixed(2);
  const percentageTransferred = ((transferredCalls / totalCalls) * 100).toFixed(2);
  const percentageAbandoned = ((abandonedCalls / totalCalls) * 100).toFixed(2);
  const percentageFailed = ((failedCalls / totalCalls) * 100).toFixed(2);

  // Formatar os dados para os gráficos
  const formattedVolumeData = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    formattedVolumeData.push({
      name: `${hourStr}:00`,
      value: volumeByHour[hourStr] || 0,
    });
  }

  const formattedResultsData = Object.keys(resultsByType).map((type) => ({
    name: type,
    value: resultsByType[type],
    percentage: `${((resultsByType[type] / totalCalls) * 100).toFixed(2)}%`,
    color: getColorForType(type),
  }));

  const formattedTransferReasonsData = Object.keys(transferReasonsByCategory).map((category) => ({
    name: category,
    value: transferReasonsByCategory[category],
    percentage: `${((transferReasonsByCategory[category] / transferredCalls) * 100).toFixed(2)}%`,
    color: getColorForCategory(category),
  }));

  const formattedCallsBySubjectData = Object.keys(callsBySubject).map((subject) => ({
    name: subject,
    value: callsBySubject[subject],
    percentage: `${((callsBySubject[subject] / totalCalls) * 100).toFixed(2)}%`,
    color: getColorForSubject(subject),
  }));

  // Formatar timeData para LineChart
  const formattedTimeData = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    const timeEntry = timeByHour[hourStr];
    if (timeEntry) {
      const averageHandlingTime = timeEntry.totalHandlingTime / timeEntry.count;
      formattedTimeData.push({
        name: `${hourStr}:00`,
        value: averageHandlingTime,
        time: `${hourStr}:00`,
      });
    } else {
      formattedTimeData.push({
        name: `${hourStr}:00`,
        value: 0,
        time: `${hourStr}:00`,
      });
    }
  }

  return {
    totalCalls,
    resolvedByIA,
    transferredCalls,
    abandonedCalls,
    failedCalls,
    totalHandlingTime,
    totalHandlingTimeAI,
    percentageResolvedByIA,
    percentageTransferred,
    percentageAbandoned,
    percentageFailed,
    volumeByHour: formattedVolumeData,
    resultsByType: formattedResultsData,
    transferReasonsByCategory: formattedTransferReasonsData,
    callsBySubject: formattedCallsBySubjectData,
    timeData: formattedTimeData, // Nova propriedade para LineChart
  };
};

// 🌈
const getColorForType = (type) => {
  switch (type) {
    case 'Resolvidas pela IA':
      return '#6C5CE7';
    case 'Transferidas para atendente humano':
      return '#33C3F0';
    case 'Abandono':
      return '#50E3C2';
    case 'Falha técnica':
      return '#FF6B6B';
    default:
      return '#808080';
  }
};

// 🌈
const getColorForCategory = (category) => {
  switch (category) {
    case 'Guia':
      return '#FFD166';
    case 'Informação':
      return '#FF6B6B';
    case 'Reclamação':
      return '#50E3C2';
    case 'Outro':
      return '#808080';
    default:
      return '#808080';
  }
};

// 🌈
const getColorForSubject = (subject) => {
  switch (subject) {
    case 'Tipo A':
      return '#6C5CE7';
    case 'Tipo B':
      return '#33C3F0';
    case 'Tipo C':
      return '#50E3C2';
    case 'Outro':
      return '#808080';
    default:
      return '#808080';
  }
};

// fetch dos dados como a api está hoje
// TODO: tem que receber todos os dados, demandando alterações na API
export const fetchData = async (currentPage = 1, pageSize = 200, startDate = "", endDate = "") => {
  try {
    const url = `https://api.dev.levesaude.macall.com.br/call/results/operation/1`;
    const response = await axios.get(url, {
      params: {
        page: currentPage,
        page_size: pageSize,
        start_date: startDate,
        end_date: endDate,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_BEARER}`,
        "Content-Type": "application/json",
      },
    });
    // Log completo da resposta para depuração
    //console.log("API Response:", JSON.stringify(response.data, null, 2));

    if (!Array.isArray(response.data)) {
      console.error("response.data is not an array:", response.data);
      return {
        data: [],
        totalPages: 0,
        processedData: {} as ProcessedData,
      };
    }

    const formattedData = response.data.map(formatCallData);
    console.log("Formatted Data:", JSON.stringify(formattedData, null, 2));
    
    const filteredData = formattedData.filter(Boolean);
    console.log("Filtered Data:", JSON.stringify(filteredData, null, 2));
    
    const processedData = processCallData(filteredData);
    console.log("Processed Data:", JSON.stringify(processedData, null, 2));

    return {
      data: filteredData,
      totalPages: Math.ceil(response.data.length / pageSize),
      processedData,
    };
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return {
      data: [],
      totalPages: 0,
      processedData: {} as ProcessedData,
    };
  }
};