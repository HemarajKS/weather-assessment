import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../components/Favourites/favpourites.css';
import Modal from 'react-modal';
import { getFavouriteData } from '../../redux/reducers/getFavSlice';

const Favourites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteData());
  }, []);

  const fav = useSelector((state: any) => state.getFavourite.data);

  const deleteAll = () => {
    // closeModal()

    for (var key in fav.data.data) {
      if (fav.data.data.hasOwnProperty(key)) {
        console.log(key);

        dispatch(getFavouriteData());
        closeModal();
      }
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteFav = (delId: any) => {};

  return (
    <>
      {fav && fav.data ? (
        <div className="favourites">
          <div className="favouritesHeader">
            <div className="favouritesLength">
              {fav.data} City added as favourite
            </div>
            <div className="favouritesRemoveAll" onClick={openModal}>
              Remove All
            </div>
          </div>
          {fav &&
            fav.data &&
            Object.keys(fav.data.data).map((key: any, i: any) => (
              <div className="favouritesBody" key={i}>
                <div className="favPlace">{fav.data[key].name}</div>
                <div className="favIcon">
                  <img
                    src={require(`../../assets/icons/${fav.data[key].icon}`)}
                    alt="sunny"
                  />
                </div>
                <div className="favTemp">
                  {fav.data[key].temp} <span>{'\u00B0'}C</span>
                </div>
                <div className="favCond">{fav.data.data[key].cond}</div>
                <div
                  className="favLike"
                  onClick={() => {
                    deleteFav(key);
                  }}
                >
                  <img
                    src={require('../../assets/icons/icon_favourite_Active.png')}
                    alt="fav"
                  />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="noFavAdded">
          <img
            src={require('../../assets/icons/icon_nothing.png')}
            alt="nothing"
          />
          <div className="noFavText">No Favourites added</div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="modalBox">
          <div className="modalText">
            Are you sure want to remove all the favourites?
          </div>
          <div className="modalButtons">
            <button className="modalBtnNo" onClick={closeModal}>
              No
            </button>
            <button className="modalBtnYes" onClick={deleteAll}>
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Favourites;
