class Api::BleatsController < ApplicationController

  def index
    # sleep(3)
    @bleats = Bleat.all.includes(:author)
    # debugger
    # render json: bleats
    render :index
  end

  def create
    @bleat = Bleat.new(bleat_params)
    @bleat.author_id = User.first.id
    # debugger
    if @bleat.save
      # render json: bleat
      render :show
    else
      render json: @bleat.errors.full_messages, status: 422
    end
  end

  def show 
    # debugger
    @bleat = Bleat.find(params[:id])
    render json: @bleat
  end 

  private
  def bleat_params
    params.require("bleat").permit(:body, :author_id)
  end

end