import React, { useState, useRef, useEffect } from "react";
import useInput from "../hooks/useInput";
import "./Profile.css";
import Compressor from "compressorjs";

function Profile({ data, onLogout, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.addEventListener("change", (e) => {
        console.log("asdasd");
        const { files } = e.target;
        if (files && files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            imgRef.current.src = e.target.result;
          };

          reader.readAsDataURL(files[0]); // convert to base64 string
        }
      });
    }
  }, [editMode]);

  const { value: nameValue, bind: nameBind, reset: resetName } = useInput(
    data.name
  );

  const { value: phoneValue, bind: phoneBind, reset: resetPhone } = useInput(
    data.phone
  );

  const {
    value: birthdateValue,
    bind: birthdateBind,
    reset: resetBirthdate,
  } = useInput(data.birthdate);

  const resetInputs = () => {
    resetName();
    resetPhone();
    resetBirthdate();

    imgRef.current.src = data.photo || "/logo.jpg";
  };

  const onSaveCb = () => {
    if (onUpdate) {
      const updatedData = {
        name: nameValue,
        phone: phoneValue,
        birthdate: birthdateValue,
      };

      if (
        fileInputRef.current &&
        fileInputRef.current.files &&
        fileInputRef.current.files[0]
      ) {
        const file = fileInputRef.current.files[0];

        if (!file) {
          return;
        }

        // compress image and trigger update
        new Compressor(file, {
          quality: 0.6,
          width: 512,
          height: 512,
          success(result) {
            updatedData.photo = result;
            onUpdate(updatedData);
          },
          error(err) {
            console.log(err.message);
            onUpdate(updatedData);
          },
        });
      } else {
        onUpdate(updatedData);
      }
    }
    setEditMode(false);
    // resetInputs();
  };

  const onCancelCb = () => {
    setEditMode(false);
    resetInputs();
  };
  return (
    <div className="container mt-3 profile">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="shadow-sm bg-white pb-2">
            <div className="mb-3 ">
              <img
                ref={imgRef}
                src={data.photo || "/logo.jpg"}
                alt="фото профиля"
                className="profile__img rounded-top"
              />
            </div>
            <div className=" m-1 p-3 rounded text-center">
              {editMode ? (
                <>
                  <div className="mb-1 small text-muted">
                    Если хочешь, выбери тут
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="custom-file-input"
                        id="inputGroupFile02"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile02"
                      >
                        новое фото
                      </label>
                    </div>
                  </div>
                  <div className="mb-1 small text-muted">
                    а сюда впиши имя, а потом фамилию
                  </div>
                  <div className="mb-3 input-group input-group-lg">
                    <input className="form-control text-center" {...nameBind} />
                  </div>

                  <div className="mb-1 small text-muted">
                    а тут - номер в формате +380ХХХХХХХХХ,
                    <br />
                    <span className="text-danger">
                      будь осторожен - номер нужен для входа
                    </span>
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      className="form-control text-center"
                      {...phoneBind}
                    />
                  </div>
                  <div className="mb-1 small text-muted">
                    и дату рождения в формате ДД.ММ.ГГГГ
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      className="form-control text-center"
                      {...birthdateBind}
                    />
                  </div>
                  {data.playlist ? (
                    <div className="mb-2">
                      <a
                        href={data.playlist}
                        className="btn btn-link text-primary"
                      >
                        мой плейлист
                      </a>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <h3 className="mb-3">{data.name}</h3>
                  <div className="mb-2">{data.phone}</div>
                  <div className="mb-2">{data.birthdate}</div>
                  {data.playlist ? (
                    <div className="mb-2">
                      <a
                        href={data.playlist}
                        className="btn btn-link text-primary"
                      >
                        мой плейлист
                      </a>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>

          <div className="m-1 p-3 text-center">
            <div className="pb-3">
              {editMode ? (
                <>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mr-3"
                    onClick={onSaveCb}
                  >
                    Сохранить
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={onCancelCb}
                  >
                    Отмена
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-sm mr-3"
                  onClick={() => setEditMode(true)}
                >
                  Редактировать
                </button>
              )}
              {onLogout && !editMode ? (
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={onLogout}
                >
                  Выйти
                </button>
              ) : null}
            </div>
            {/* <div>
              <button type="button" className="btn btn-link text-danger btn-sm">
                удалить профиль
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
