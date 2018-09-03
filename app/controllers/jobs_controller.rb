class JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    @jobs =  Job.all
    json_response(@jobs)
  end

  def create
    @job = Job.create!(job_params)
  json_response(@job, :created)
  end

  def update
    @job.update!(job_params)
    head :no_content
  end

  def show
    json_response(@job)
  end

  def destroy
    @job.destroy
    head :no_content
  end

  private

  def job_params
    params.permit( :created_at, :title, :company, :description)
  end

  def set_job
    @job = Job.find(params[:id])
  end


end
