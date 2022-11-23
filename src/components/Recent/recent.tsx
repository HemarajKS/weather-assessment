import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import './recent.css'
const Recent = () => {
  const dispatch = useDispatch()

  const recent = useSelector((state: any) => state.getrecent.data)

  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const deleteAll = () => {
    for (var key in recent.data) {
      if (recent.data.hasOwnProperty(key)) {
        console.log(key)

        closeModal()
      }
    }
  }

  // recent &&
  //   recent.data &&
  //   favData &&
  //   favData.data &&
  //   favData.data &&
  //   Object.keys(favData.data).map((fav: any) => {
  //     let breakCondition = false;
  //     if (
  //       !breakCondition &&
  //       favData.data[fav].id === recent.data[key].id
  //     ) {
  //       breakCondition = true;
  //       return <div>yes</div>;
  //     } else {
  //       breakCondition = true;
  //       return <div>no</div>;
  //     }
  //   });

  // useEffect(() => {
  //   favData &&
  //     favData.data &&
  //     favData.data &&
  //     recent &&
  //     recent.data &&
  //     recent.data &&
  //     console.log('recent fav', favData.data, recent.data)
  // }, [favData])
  return (
    <>
      {recent && recent.data && recent.data ? (
        <>
          <div className="favourites">
            <div className="favouritesHeader">
              <div className="favouritesLength">You recently searched for</div>
              <div className="favouritesRemoveAll" onClick={openModal}>
                Clear All
              </div>
            </div>
            {recent &&
              recent.data &&
              recent.data &&
              Object.keys(recent.data)
                .slice(0)
                .reverse()
                .map((key: any, i: any) => {
                  return (
                    <div className="favouritesBody" key={i}>
                      <div className="favPlace">
                        {recent.data[key].place}, {recent.data[key].region}
                      </div>
                      <div className="favIcon">
                        <img src={recent.data[key].icon} alt="sunny" />
                      </div>
                      <div className="favTemp">
                        {recent.data[key].temp_c.toFixed(0)}{' '}
                        <span>{'\u00B0'}C</span>
                      </div>
                      <div className="favCond">
                        {recent.data[key].condition}
                      </div>

                      <div
                        className="favLike"
                        onClick={() => {
                          // deleteFav(ele.id);
                        }}
                      >
                        {recent.data[key].liked ? (
                          <img
                            src={require('../../assets/icons/icon_favourite_Active.png')}
                            alt="fav"
                          />
                        ) : (
                          <img
                            src={require('../../assets/icons/icon_favourite.png')}
                            alt="fav"
                            width={18}
                            height={18}
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <div className="modalBox">
              <div className="modalText">
                Are you sure want to remove all the recent searches?
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
      ) : (
        <div className="noFavAdded">
          <img
            src={require('../../assets/icons/icon_nothing.png')}
            alt="nothing"
          />
          <div className="noFavText">No Recent Search</div>
        </div>
      )}
    </>
  )
}

export default Recent
