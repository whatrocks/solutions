class StoreController < ApplicationController
  def index
    @products = Product.order(:title)
    @notice = "hellos"
  end
end
