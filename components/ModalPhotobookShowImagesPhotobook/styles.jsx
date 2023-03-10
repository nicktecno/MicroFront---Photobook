import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ModalPhotobook = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      margin-top: 90px;
      width: 100%;
      height: 1000vh;
      z-index: 0;
      background: #0000004e;
    }
  }
  width: 100%;
  height: 100%;

  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @-moz-document url-prefix() {
    background-color: #0000006c;
  }

  position: fixed;

  left: 0;
  top: 0;
  z-index: 99;
  display: none;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const closeButton = styled.span`
  font-size: 25px;
  display: flex;
  color: var(--title-color);
  font-weight: 700;
  position: absolute;
  top: 13px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;

  ${customMedia.lessThan("400px")`
        top: 12px;
        right:5px;
        padding:0 10px;
        
    `}// :hover {
  //   color: #778162;
 // }
`;

export const AlertCenterPhotobook = styled.div`
  display: flex;
  max-width: 1200px;
  width: 90%;
  height: 520px;
  background: white;
  text-align: center;
  color: black;
  flex-direction: column;
  align-items: center;
  position: absolute;

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f4f4f5;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }

  ${customMedia.lessThan("tablet")`
     width: 100%;
     height:507px;
     margin-top:10px;
     overflow:auto;
    `}

  .modalTitle {
    width: 100%;
    position: relative;
    color: var(--title-color);
    background: var(--default-color);
    font-size: 1.125rem;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    text-align: center;

    ${customMedia.lessThan("tablet")`
      min-height: 50px;
    `}

    .title {
      font-weight: bold;
      font-size: 16px;
      ${customMedia.lessThan("mobile")`
      max-width:225px;
     
    `}
    }
    ${customMedia.lessThan("tablet")`
        margin-bottom: 0px;
    `}
  }
`;

export const ContainerCenterBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f4f4f5;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }

  ${customMedia.lessThan("tablet")`
        flex-direction:column;
    `}

  .carouselContainer {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 65%;
    align-items: center;
    justify-content: center;

    .noImages {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    ${customMedia.lessThan("tablet")`
       width:100%;
    `}

    .carousel {
      &.slide {
        display: flex;
        width: 100%;
        padding: 0px;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .carousel-control-prev {
      background-color: transparent;
      height: 100%;
      width: 40px;
      transition: 0.3s;

      :hover {
        background-color: #086a6852;
        height: 100%;

        width: 50px;
      }
    }
    .carousel-control-prev-icon {
      background-image: url("/images/prevBlack.png");
      height: 15px;
      width: 10px;
    }
    .carousel-control-next {
      background-color: transparent;
      height: 100%;
      width: 40px;
      transition: 0.3s;
      :hover {
        background-color: #086a6852;
        height: 100%;

        width: 50px;
      }
    }
    .carousel-control-next-icon {
      background-image: url("/images/nextBlack.png");
      height: 15px;
      width: 10px;
    }

    .carousel-indicators {
      display: none;
      li {
        margin-right: 20px;
        width: 30px;
        height: 7px;
        background-color: #dbc79a;

        display: block;
        border: 0px;

        &.active {
          background-color: #dbc79a;
        }
      }
    }

    .containerItem {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;

      ${customMedia.lessThan("tablet")`
    height:300px;
    `}

      .containerButtons {
        position: absolute;
        display: flex;
        bottom: 20px;
        width: 100%;
        justify-content: flex-end;
        right: 10%;
        gap: 10px;

        ${customMedia.lessThan("430px")`
           justify-content: center;
           right:0;
    `}

        button {
          border: 0px;
          width: 110px;
          background: var(--default-color);
          color: var(--title-color);
          height: 40px;

          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          ${customMedia.lessThan("360px")`
          width:80px;
          `}

          &.liked {
            background: var(--default-color-hover);
            color: var(--title-color);
          }

          .title {
            margin-top: 0px;

            ${customMedia.lessThan("360px")`
          display:none;
          `}
          }

          .image {
            margin-right: 5px;
            width: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            ${customMedia.lessThan("360px")`
         width: 20px;
          `}
            svg {
              width: 15px;
              ${customMedia.lessThan("360px")`
         width: 20px;
          `}
            }
          }

          :hover {
            background: var(--default-color-hover);
            color: var(--title-color);
          }
        }
      }
    }
  }

  .dataContainer {
    display: flex;
    width: 35%;

    ${customMedia.lessThan("tablet")`
    width: 100%;
    `}
  }

  .containerPhotoData {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px;

    .titleContent {
      display: flex;

      margin: 10px 0px;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: flex-start;
      min-height: 65px;
      max-height: 100px;
      overflow: auto;
      text-align: start;
      padding: 0px 5px 0px 0px;

      &.name {
        min-height: 20px;
        max-height: 20px;
      }

      ::-webkit-scrollbar {
        width: 7px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #f4f4f5;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #ccc;
      }
    }

    .containerAddNewImage {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      flex: 1;

      ${customMedia.lessThan("tablet")`
    margin-top: 20px;
    `}

      .addNewImage {
        padding: 10px;
        font-weight: 600;

        transition: 0.3s;
        width: 90%;
        cursor: pointer;
        text-transform: uppercase;
        :hover {
          color: #fff !important;
        }
      }
    }
  }
`;

export const ImageBannerWeb = styled.img`
  display: flex;
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
