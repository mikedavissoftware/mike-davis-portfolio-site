class SkillsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index

  end

  def show

  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def _params
    params.permit(:name, :skill_type_id)
  end
end
