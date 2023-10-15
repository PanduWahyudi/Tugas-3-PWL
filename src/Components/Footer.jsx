import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="absolute bottom-0 w-full">
        <div className="bg-mid-purple w-full flex justify-center p-4">
          <div className="w-1/4 flex justify-between">
            <a href="" className="text-lg font-semibold text-white" id="name">
              Pandu Wahyudi || 120140010
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
