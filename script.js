const dataRenderEl = document.querySelector(".data-render");
// const dataRende = document.querySelector(".data-render-instroduce");

const data = [
  {
    id: "B1906024",
    name: "Nguyễn Khánh Văn",
    email: "vanb1906024@student.ctu.edu.vn",
    job: "Trang giới thiệu thành viên và phân công công việc",
    img: "./img/khanh_van.jpg",
  },
  {
    id: "B1906015",
    name: "Lê Trương Thảo Trinh",
    email: "trinhb1906015@student.ctu.edu.vn",
    job: "Trang chủ + Nội dung yêu cầu",
    img: "./img/hot_streamer.jpg",
  },
  {
    id: "B1906023",
    name: "Lê Quang Tường",
    email: "tuongb1906023@student.ctu.edu.vn",
    job: "Kiểm tra lại toàn bài + Mục liên hệ",
    img: "./img/hot_boy.jpg",
  },
  {
    id: "B1905873",
    name: "Lê Cát Vy",
    email: "vyb1905873@student.ctu.edu.vn",
    job: "Nhập hàng + Thu thập dữ liệu",
    img: "./img/cat_vy.jpg",
  },
  {
    id: "B1905861",
    name: "Trần Thị Bảo Trân",
    email: "tranb1905861@student.ctu.edu.vn",
    job: "Xuất hàng + Thu thập dữ liệu",
    img: "./img/hot_girl.jpg",
  },
];

const renderData = (id) => {
  const index = data.findIndex((x, y) => x.id === id);
  let htmls = "";
  if (document.querySelector(`.list-group-item.active`)) {
    document
      .querySelector(`.list-group-item.active`)
      .classList.remove("active");
  }
  // console.log(`.B1906015.active`);
  // console.log(document.querySelector(`.B1906024.active`));

  // console.log(document.querySelector(`.${id}.active`));
  if (id) {
    document.querySelector(`.${id}`).classList.add("active");
  } else {
    document.querySelector(`.list-group-item`).classList.add("active");
  }
  if (index !== -1) {
    htmls = `
        <h1 class="text-center mb-4 text-white">Giới Thiệu</h1>
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img
                            style="width: 100px; height: 100px;object-fit:cover"
                            src="${data[index].img}"
                            class="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h6 class="f-w-600">${data[index].name}</h6>
                        <p>Quản Lý Công Nghiệp k45</p>
                        <i class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                          Thông tin
                        </h6>
                        <div class="row">
                          <div class="col-8">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted f-w-400">
                              ${data[index].email}
                            </h6>
                          </div>
                          <div class="col-4">
                            <p class="m-b-10 f-w-600">MSSV</p>
                            <h6 class="text-muted f-w-400">
                              ${data[index].id}
                            </h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Công việc
                        </h6>
                        <div class="row">
                          <div class="col-8">
                            <p class="m-b-10 f-w-600">Nội dung</p>
                            <h6 class="text-muted f-w-400">
                              ${data[index].job}
                            </h6>
                          </div>
                          <div class="col-4">
                            <p class="m-b-10 f-w-600">Hoàn thành</p>
                            <h6 class="text-muted f-w-400">100%</h6>
                          </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h1 class="text-center mb-4 text-white">Giảng viên hướng dẫn</h1>
          <div class="work rounded py-4">
            <div class="d-flex gap justify-content-center align-items-center">
              <img class="img-teacher" src="./img/teacher_1.png" alt="" />
              <div class="">
                <h3>NGUYỄN VĂN KHANH</h3>
                <div class="">
                  <p>
                    <strong>Email: </strong>vankhanh@ctu.edu.vn
                  </p>
                  <p>
                    <strong>Trình độ chuyên môn: </strong>Tiến sĩ
                  </p>
                  <p>
                    <strong>Đơn vị công tác: </strong>BM. Tự động hóa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  } else {
    htmls = `
    <h1 class="text-center mb-4 text-white">Phân công công việc</h1>
    <div class="work mb-4">
      <table border="1" style="width: 100%; cursor: pointer">
        <tr>
          <th class="text-center py-1 px-2">Lê Trưởng Thảo Trinh</th>
          <td class="text-center">Trang chủ + Menu</td>
        </tr>
        <tr>
          <th class="text-center py-1 px-2">Lê Quang Tường</th>
          <td class="text-center">
            Kiểm tra lại toàn bài + Mục liên hệ
          </td>
        </tr>
        <tr>
          <th class="text-center py-1 px-2">Lê Cát Vy</th>
          <td class="text-center">
            Nhập hàng + Thu thập dữ liệu
          </td>
        </tr>
        <tr>
          <th class="text-center py-1 px-2">Trần Thị Bảo Trân</th>
          <td class="text-center">
            Xuất hàng + Thu thập dữ liệu
          </td>
        </tr>
        <tr>
          <th class="text-center py-1 px-2">Nguyễn Khánh Văn</th>
          <td class="text-center">
          Trang giới thiệu thành viên và phân công công việc
          </td>
        </tr>
      </table>
    </div>
    <div class="">
      <h1 class="text-center mb-4 text-white">Giảng viên hướng dẫn</h1>
      <div class="work rounded py-4">
        <div
          class="d-flex gap justify-content-center align-items-center"
        >
          <img class="img-teacher" src="./img/teacher_1.png" alt="" />
          <div class="">
            <h3>NGUYỄN VĂN KHANH</h3>
            <div class="">
              <p><strong>Email: </strong>vankhanh@ctu.edu.vn</p>
              <p><strong>Trình độ chuyên môn: </strong>Tiến sĩ</p>
              <p><strong>Đơn vị công tác: </strong>BM. Tự động hóa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  dataRenderEl.innerHTML = htmls;
};
