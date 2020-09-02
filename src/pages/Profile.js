import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
function Profile({ data }) {
  console.log(data);
  const birth = new Date(data.birthdate || null);
  const birthStr = [
    birth.getDate(),
    birth.getMonth() + 1,
    birth.getFullYear(),
  ].join(".");
  return (
    <div className="container mt-3 profile">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="shadow-sm bg-white pb-2">
            <div className="mb-3 ">
              <img
                src={data.photo || "/logo.jpg"}
                alt="фото профиля"
                className="profile__img rounded-top"
              />
            </div>
            <div className=" m-1 pt-3 rounded text-center">
              <h3 className="mb-3">{data.name}</h3>
              <div className="mb-2">{data.phone}</div>
              <div className="mb-2">{birthStr}</div>
              {data.playlist ? (
                <div className="mb-2">
                  <a href={data.playlist} className="btn btn-link text-primary">
                    мой плейлист
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div className="m-1 p-3 text-center">
            <div className="pb-3 border-bottom">
              <button type="button" className="btn btn-primary btn-sm mr-3">
                Редактировать
              </button>
              <Link
                type="button"
                className="btn btn-primary btn-sm"
                to="/login"
              >
                Выйти
              </Link>
            </div>
            <div>
              <button type="button" className="btn btn-link text-danger btn-sm">
                удалить профиль
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
