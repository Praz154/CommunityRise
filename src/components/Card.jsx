import React from "react";
import community from "../assets/community.jpg";
import "../card.css";
function Card() {
  return (
    <>
      <div className="CardContainerWrapper">
        <div className="CardContainer">
          <div className="CardContainerLeft">
            <div className="CardLeft">
              <img src={community} alt="volunteer-image" />
              <div className="CardInfoWrapper">
                <div className="CardInfo">
                  <div className="CardHeading">
                    <h3>Lorem Ipsum</h3>
                  </div>
                  <div className="CardPara">
                    <p>
                      Ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Placeat alias consequatur, quia nemo qui, error
                      soluta nostrum obcaecati laudantium repellendus provident
                      ad recusandae odio labore facilis et voluptatum neque
                      distinctio.
                    </p>
                    <div className="CardButton">
                      <button className="CardButton">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardContainerRight">
            <div className="CardWrapper">
              <div className="Card">
                <div className="CardRight">
                  <img src={community} alt="" />
                  <div className="CardInfoWrapper">
                    <div className="CardInfo">
                      <div className="CardHeading">
                        <h3>Lorem Ipsum</h3>
                      </div>
                      <div className="CardPara">
                        <p>
                          Ipsum Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Placeat alias consequatur, quia nemo
                          qui, error soluta nostrum obcaecati laudantium
                          repellendus provident ad recusandae odio labore
                          facilis et voluptatum neque distinctio.
                        </p>
                        <div className="CardButton">
                          <button className="CardButton">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardWrapper">
              <div className="Card">
                <div className="CardRight">
                  <img src={community} alt="" />
                  <div className="CardInfoWrapper">
                    <div className="CardInfo">
                      <div className="CardHeading">
                        <h3>Lorem Ipsum</h3>
                      </div>
                      <div className="CardPara">
                        <p>
                          Ipsum Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Placeat alias consequatur, quia nemo
                          qui, error soluta nostrum obcaecati laudantium
                          repellendus provident ad recusandae odio labore
                          facilis et voluptatum neque distinctio.
                        </p>
                        <div className="CardButton">
                          <button className="CardButton">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
