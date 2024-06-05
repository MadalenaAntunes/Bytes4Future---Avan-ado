export function estacaoDoAno(data1) {
  const datas = data1.map((a) => new Date(a.ts));

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;

  for (let i = 0; i < datas.length; i++) {
    if (
      (datas[i].getMonth() === 2 && datas[i].getDate() >= 20) ||
      datas[i].getMonth() === 3 ||
      (datas[i].getMonth() === 4 && datas[i].getDate() <= 20)
    ) {
      count1++;
    }
    if (
      (datas[i].getMonth() === 5 && datas[i].getDate() >= 21) ||
      datas[i].getMonth() === 6 ||
      (datas[i].getMonth() === 7 && datas[i].getDate() <= 21)
    ) {
      count2++;
    }
    if (
      (datas[i].getMonth() === 8 && datas[i].getDate() >= 22) ||
      datas[i].getMonth() === 9 ||
      (datas[i].getMonth() === 10 && datas[i].getDate() <= 21)
    ) {
      count3++;
    }
    if (
      (datas[i].getMonth() === 11 && datas[i].getDate() >= 22) ||
      datas[i].getMonth() === 0 ||
      (datas[i].getMonth() === 1 && datas[i].getDate() <= 19)
    ) {
      count4++;
    }
  }

  let array = [count1, count2, count3, count4];
  let estacaomaxima = Math.max(...array);
  let estacao = "";

  if (estacaomaxima === count1) {
    estacao = "Primavera";
  }
  if (estacaomaxima === count2) {
    estacao = "Verão";
  }
  if (estacaomaxima === count3) {
    estacao = "Outono";
  }
  if (estacaomaxima === count4) {
    estacao = "Inverno";
  }
  return estacao;
}
