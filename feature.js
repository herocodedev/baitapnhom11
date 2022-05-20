const API_READ_KEY = "KIG0CSUJ55ILB8BY";
const API_WRITE_KEY = "HEB2Y07Q41JP3L3E";
const CHANNEL_ID_1 = "1741087";
const CHANNEL_ID_2 = "1741090";
const CHANNEL_ID_3 = "1741091";
const CHANNEL_ID_4 = "1741092";

// DELL
const inputImportDellProduct = document.querySelector(".import-product-dell");
const inputExportDellProduct = document.querySelector(".export-product-dell");
const btnImportDellProduct = document.querySelector(".btn-import-dell");
const btnExportDellProduct = document.querySelector(".btn-export-dell");
const chartImportDellProduct = document.querySelector(
  ".chart-import-product-dell"
);
const chartExportDellProduct = document.querySelector(
  ".chart-export-product-dell"
);

const nhapHangDELL = async (soluong) => {
  const API = `https://api.thingspeak.com/update?api_key=HEB2Y07Q41JP3L3E&field1=${soluong}`;
  const data = await axios.get(API);
  alert("Nhập hàng thành công!");
};

const xuatHangDELL = async (soluong) => {
  const API = `https://api.thingspeak.com/update?api_key=X2GAMODPEEE50OLB&field1=${soluong}`;
  const data = await axios.get(API);
  alert("Xuất hàng thành công!");
};

btnImportDellProduct.addEventListener("click", (e) => {
  const value = Number(inputImportDellProduct.value);
  if (value === 0) alert("Số lượng sản phẩm nhập về phải lớn hơn 0!");
  else {
    nhapHangDELL(value);
    alert("Quá trình sẽ mất một vài giấy! Bạn đợi xíu nhé");
    chartImportDellProduct.innerHTML = `<iframe
    width="450"
    height="260"
    style="border: 1px solid #cccccc"
    src="https://thingspeak.com/channels/1741087/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&xaxis=M%C3%A1y+t%C3%ADnh+HP"
  ></iframe>`;
    inputImportDellProduct.value = "";
  }
});

btnExportDellProduct.addEventListener("click", (e) => {
  const value = Number(inputExportDellProduct.value);
  if (value === 0) alert("Số lượng sản phẩm xuất ra phải lớn hơn 0!");
  else {
    xuatHangDELL(value);
    alert("Quá trình sẽ mất một vài giấy! Bạn đợi xíu nhé");
    chartExportDellProduct.innerHTML = `<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1741092/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&xaxis=M%C3%A1y+t%C3%ADnh+Dell"></iframe>`;
    inputExportDellProduct.value = "";
  }
});
// HP
const inputImportHPProduct = document.querySelector(".import-product-hp");
const inputExportHPProduct = document.querySelector(".export-product-hp");
const btnImportHPProduct = document.querySelector(".btn-import-hp");
const btnExportHPProduct = document.querySelector(".btn-export-hp");
const chartImportHPProduct = document.querySelector(".chart-import-product-hp");
const chartExportHPProduct = document.querySelector(".chart-export-product-hp");
const nhapHangHP = async (soluong) => {
  const API = `https://api.thingspeak.com/update?api_key=KRQ2D8GUUQWJOQUX&field1=${soluong}`;
  const data = await axios.get(API);
  alert("Nhập hàng thành công!");
};

const xuatHangHP = async (soluong) => {
  const API = `https://api.thingspeak.com/update?api_key=5RRETBI2D272SL8W&field1=${soluong}`;
  const data = await axios.get(API);
  alert("Xuất hàng thành công!");
};

btnImportHPProduct.addEventListener("click", (e) => {
  const value = Number(inputImportHPProduct.value);
  if (value === 0) alert("Số lượng sản phẩm nhập về phải lớn hơn 0!");
  else {
    nhapHangHP(value);
    alert("Quá trình sẽ mất một vài giấy! Bạn đợi xíu nhé");
    chartImportHPProduct.innerHTML = `<iframe
    width="450"
    height="260"
    style="border: 1px solid #cccccc"
    src="https://thingspeak.com/channels/1741090/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&xaxis=M%C3%A1y+t%C3%ADnh+Dell"
  ></iframe>`;
    inputImportHPProduct.value = "";
  }
});

btnExportHPProduct.addEventListener("click", (e) => {
  const value = Number(inputExportHPProduct.value);
  if (value === 0) alert("Số lượng sản phẩm xuất ra phải lớn hơn 0!");
  else {
    xuatHangHP(value);
    alert("Quá trình sẽ mất một vài giấy! Bạn đợi xíu nhé");
    chartExportHPProduct.innerHTML = `<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1741091/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&xaxis=M%C3%A1y+t%C3%ADnh+HP"></iframe>`;
    inputExportHPProduct.value = "";
  }
});
