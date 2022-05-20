loading = 0;
const laySoLuongHangDaNhapDell = async () => {
  const { data } = await axios.get(
    `https://api.thingspeak.com/channels/1741087/feeds.json`
  );

  let total = 0;
  data.feeds.forEach((item, index) => {
    total += Number(item.field1);
  });
  loading++;
  return total;
};

const laySoLuongHangDaXuatDell = async () => {
  const { data } = await axios.get(
    `https://api.thingspeak.com/channels/1741092/feeds.json`
  );

  let total = 0;
  data.feeds.forEach((item, index) => {
    total += Number(item.field1);
  });
  loading++;

  return total;
};

const laySoLuongHangDaNhapHP = async () => {
  const { data } = await axios.get(
    `https://api.thingspeak.com/channels/1741090/feeds.json`
  );

  let total = 0;
  data.feeds.forEach((item, index) => {
    total += Number(item.field1);
  });
  loading++;

  return total;
};

const laySoLuongHangDaXuatHP = async () => {
  const { data } = await axios.get(
    `https://api.thingspeak.com/channels/1741091/feeds.json`
  );

  let total = 0;
  data.feeds.forEach((item, index) => {
    total += Number(item.field1);
  });
  loading++;
  return total;
};

const renderData = async () => {
  const loadingEl = document.querySelector(".loading");
  loadingEl.classList.add("d-flex");
  loadingEl.classList.remove("d-none");

  const idTimeOut = setTimeout(() => {
    loadingEl.classList.remove("d-flex");
    loadingEl.classList.add("d-none");
  }, 3000);

  const tongSoLuongHangNhapDell = await laySoLuongHangDaNhapDell();
  const tongSoLuongHangXuatDell = await laySoLuongHangDaXuatDell();
  const tongSoLuongHangNhapHP = await laySoLuongHangDaNhapHP();
  const tongSoLuongHangXuatHP = await laySoLuongHangDaXuatHP();

  const contentTable = document.querySelector(".body-table");
  contentTable.innerHTML = `
        <tr>
            <th scope="row">1</th>
            <td>Laptop HP</td>
            <td>${tongSoLuongHangNhapHP}</td>
            <td>${tongSoLuongHangXuatHP}</td>
        </tr>
        <tr>
        <th scope="row">2</th>
            <td>Laptop DELL</td>
            <td>${tongSoLuongHangNhapDell}</td>
            <td>${tongSoLuongHangXuatDell}</td>
        </tr>
        <tr>
            <th scope="row" colspan="2">Tổng</th>
            <td>${tongSoLuongHangNhapDell + tongSoLuongHangNhapHP}</td>
            <td>${tongSoLuongHangXuatHP + tongSoLuongHangXuatDell}</td>
        </tr>
  `;
};

renderData();
