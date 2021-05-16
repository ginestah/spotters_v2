class BouldersController < ApplicationController
  before_action :set_boulder, only: [:show, :update, :destroy]

  # GET /boulders
  def index
    @boulders = Boulder.all

    render json: @boulders
  end

  # GET /boulders/1
  def show
    render json: @boulder
  end

  # POST /boulders
  def create
    @boulder = Boulder.new(boulder_params)

    if @boulder.save
      render json: @boulder, status: :created, location: @boulder
    else
      render json: @boulder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boulders/1
  def update
    if @boulder.update(boulder_params)
      render json: @boulder
    else
      render json: @boulder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boulders/1
  def destroy
    @boulder.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_boulder
      @boulder = Boulder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def boulder_params
      params.require(:boulder).permit(:title, :user_id, :difficulty, :location, :description)
    end
end
