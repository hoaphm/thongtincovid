class MedicalForm {
	ten = "";
	ho = "";
	email = "";
	soDienThoai = "";
	ngay = "";
	thang = "";
	nam = "";
	diaChi = "";
	thongTinDiChuyen = "";
	loaiNhiem = "";
	constructor() {}
}
function obsKeysToString(o, k, sep) {
	return k
		.map((key) => o[key])
		.filter((v) => v)
		.join(sep);
}
document.querySelector("#signup-form .actions ul li:last-child a").onclick =
	function () {
		let newMedicalForm = new MedicalForm();
		let arrInput = document.querySelectorAll(
			"#signup-form input,#signup-form select"
		);
		console.log(arrInput);

		arrInput.forEach((e) => {
			let { value, id } = e;
			newMedicalForm[id] = value;
		});
		newMedicalForm.ngaySinh = obsKeysToString(
			newMedicalForm,
			["ngay", "thang", "nam"],
			"/"
		);

		console.log(newMedicalForm);
		let strOutput = "";
		for (let key in newMedicalForm) {
			switch (key) {
				case "ten":
					{
						strOutput += `
                    <li id="${key}">Ten: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "ho":
					{
						strOutput += `
                    <li id="${key}">Ho: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "email":
					{
						strOutput += `
                    <li id="${key}">Email: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "soDienThoai":
					{
						strOutput += `
                    <li id="${key}">So dien thoai: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "ngaySinh":
					{
						strOutput += `
                    <li id="${key}">Ngay sinh: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "diaChi":
					{
						strOutput += `
                    <li id="${key}">Dia chi: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "thongTinDiChuyen":
					{
						strOutput += `
                    <li id="${key}">Thong tin di chuyen: ${newMedicalForm[key]}</li>
                `;
					}
					break;
				case "loaiNhiem":
					{
						strOutput += `
                    <li id="${key}">Loai nhiem: ${newMedicalForm[key]}</li>
                `;
					}
					break;
			}
		}
		document.querySelector(".donate-us").innerHTML = `
        <ul>
            ${strOutput}
        </ul>`;
	};
