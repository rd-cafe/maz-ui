export declare const style = "\n.maz-zoom-img {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  z-index: 1050;\n  background-color: hsla(238, 15%, 40%, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.maz-zoom-img,\n.maz-zoom-img * {\n  box-sizing: border-box;\n}\n\n.maz-zoom-img .maz-zoom-img__wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 0;\n  min-height: 0;\n  max-width: 100%;\n  max-height: 100%;\n  transition: all 300ms ease-in-out;\n  opacity: 0;\n  transform: scale(0.5);\n}\n\n.maz-zoom-img.maz-animate .maz-zoom-img__wrapper {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.maz-zoom-img.maz-animate .maz-zoom-img__loader {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsla(238, 15%, 40%, 0.7);\n  border-radius: 1rem;\n  z-index: 2;\n  min-width: 60px;\n  min-height: 60px;\n}\n.maz-zoom-img.maz-animate .maz-zoom-img__loader[hidden] {\n  display: none;\n}\n\n@-webkit-keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.maz-zoom-img.maz-animate .maz-zoom-img__loader__svg {\n  animation: spin .6s linear infinite;\n}\n\n.maz-zoom-img img {\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 0;\n  border-radius: 1rem;\n}\n\n.maz-zoom-img .maz-zoom-btn {\n  margin: 0 auto;\n  border: none;\n  background-color: hsla(0, 0%, 7%, 0.5);\n  box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.2);\n  height: 2.2rem;\n  min-height: 2.2rem;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2.2rem;\n  cursor: pointer;\n  flex: 0 0 auto;\n  outline: none;\n}\n\n.maz-zoom-img .maz-zoom-btn svg {\n  fill: white;\n}\n\n.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 1;\n}\n\n.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--previous {\n  position: absolute;\n  left: 0.5rem;\n  z-index: 1;\n}\n\n.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--next {\n  position: absolute;\n  right: 0.5rem;\n  z-index: 1;\n}\n\n.maz-zoom-img .maz-zoom-btn:hover {\n  background-color: hsl(0, 0%, 0%);\n}";
